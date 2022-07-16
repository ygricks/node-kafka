console.log('consumer log..');
import Kafka from 'node-rdkafka';
import MessageEventType from '../eventType/MessegeEventType.js';


const consumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

consumer.on('ready', () => {
    console.log('consumer ready..');
    consumer.subscribe(['test']);
    consumer.consume();
}).on('data', (data) => {
    console.log(`reseved message: ${MessageEventType.fromBuffer(data.value)}`)
});
