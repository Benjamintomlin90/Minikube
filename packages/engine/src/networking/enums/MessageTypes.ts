/** Network Message Types. */
export enum MessageTypes {
  Heartbeat = 0,
  ClientConnected = 1,
  ClientDisconnected = 2,
  Initialization = 3,
  JoinWorld = 4,
  LeaveWorld = 5,
  UpdatePeers = 6,
  WebRTCTransportCreate = 7,
  WebRTCTransportConnect = 8,
  WebRTCTransportClose = 9,
  WebRTCSendTrack = 10,
  WebRTCReceiveTrack = 11,
  WebRTCPauseConsumer = 12,
  WebRTCResumeConsumer = 13,
  WebRTCCloseConsumer = 14,
  WebRTCPauseProducer = 15,
  WebRTCResumeProducer = 16,
  WebRTCCloseProducer = 17,
  WebRTCMuteOtherProducer = 18,
  WebRTCUnmuteOtherProducer = 19,
  WebRTCConsumerSetLayers = 20,
  WebRTCConsumeData = 21,
  WebRTCProduceData = 22,
  ReliableMessage = 23,
  WebRTCCreateProducer = 24,
  Authorization = 25,
  Kick = 26,
  WebRTCRequestCurrentProducers = 29,
  InitializeRouter = 31,
  ActionData = 42
}
