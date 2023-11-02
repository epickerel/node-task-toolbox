const task = {
  name: 'getAdafruitFeed',
  description: 'Gets the latest data from an Adafruit IO feed',
};

const getAdafruitFeed = async (context) => {
  //console.log(`Executing ${task.name} task`);
  //console.log(context);
  const { username, key, feed } = context.constants.adafruitIO;
  const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed}/data`;
  const response = await fetch(url, {
    headers: {
      'X-AIO-Key': key,
    },
  });
  const data = await response.json();
  console.log(data);
};

export default getAdafruitFeed;

export { task };
