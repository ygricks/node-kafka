import avro from 'avsc';

const MessageEventType = avro.Type.forSchema({
  name: 'Message',
  type: 'record',
  fields: [
    {
      name: 'timeStamp',
      type: 'long'
    },
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'type',
      type: {type: 'enum', name: 'MessegeKind', symbols: ['ERR', 'LOG', 'DAN']}
    },
  ]
});

export default MessageEventType;