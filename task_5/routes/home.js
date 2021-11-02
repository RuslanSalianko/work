import { Router } from 'express';

export const router = new Router();

function searchPathKey(json, search) {
  const found = [];

  for (const [key, value] of Object.entries(json)) {
    if (typeof value === 'object') {
      const foundKey = searchPathKey(value, search);
      if (foundKey.length !== 0) {
        found.push({
          parentKey: key,
          key: foundKey,
        });
      }
    }
    if (value === search) {
      found.push(key);
    }
  }
  return found;
}

function creationMessage(arr) {
  let str = '';
  arr.forEach((element) => {
    if (typeof element === 'object') {
      str += `=>  ${element.parentKey} ${creationMessage(element.key)}`;
    } else {
      str += `=>  ${element}`;
      str += '<br>';
    }
  });
  return str;
}

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
  });
});

router.post('/', (req, res) => {
  const json = JSON.parse(req.body.json);
  const search = req.body.search;

  const arrKey = searchPathKey(json, search);
  const message = creationMessage(arrKey);

  res.setHeader('Content-type', 'application/json');
  res.write(JSON.stringify({ message }));
  res.end();
});

export { router as homeRouter };
