console.log('produces..');
import Kafka from 'node-rdkafka';
import MessageEventType from '../eventType/MessegeEventType.js';

const stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
}, {}, {topic: 'test'});

function queueMessage() {
    const now = Date.now();
    console.log('ts', Math.floor(now / 1e3));
    const event = Math.floor(now / 1e3) % 2 == 0 
        ? {type: 'ERR', title: 'something very wrong', timeStamp: now}
        : {type: 'LOG', title: 'just some regular log', timeStamp: now}
    ;
    const success = stream.write(MessageEventType.toBuffer(event));
    if (success) {
        console.log('produce', event);
    } else {
        console.log('something went wroneg');
    }
}

setInterval(() => {
    queueMessage();
}, 3000);
