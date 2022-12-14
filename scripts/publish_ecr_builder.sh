#!/bin/bash
set -e
set -x

STAGE=$1
TAG=$2
LABEL=$3
PRIVATE_ECR=$4
REGION=$5
EEVERSION=$(jq -r .version ./packages/server-core/package.json)

if [ $PRIVATE_ECR == "true" ]
then
  aws ecr get-login-password --region $REGION | docker login -u AWS --password-stdin $ECR_URL
  aws ecr describe-repositories --repository-names $REPO_NAME-builder --region $REGION || aws ecr create-repository --repository-name $REPO_NAME-builder --region $REGION
  node ./scripts/prune_ecr_images.js --repoName $REPO_NAME-builder --region $REGION
else
  aws ecr-public get-login-password --region us-east-1 | docker login -u AWS --password-stdin $ECR_URL
  aws ecr-public describe-repositories --repository-names $REPO_NAME-builder --region us-east-1 || aws ecr-public create-repository --repository-name $REPO_NAME-builder --region us-east-1
  node ./scripts/prune_ecr_images.js --repoName $REPO_NAME-builder --region us-east-1 --public
fi

docker tag $LABEL $ECR_URL/$REPO_NAME-builder:"${EEVERSION}_${TAG}"
docker tag $LABEL $ECR_URL/$REPO_NAME-builder:latest_$STAGE
docker push $ECR_URL/$REPO_NAME-builder:"${EEVERSION}_${TAG}"
docker push $ECR_URL/$REPO_NAME-builder:latest_$STAGE
