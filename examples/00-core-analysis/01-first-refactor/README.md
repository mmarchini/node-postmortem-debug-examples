```bash
ulimit -c unlimited
rm -f core
node --max-old-space-size=8 --abort-on-uncaught-exception index.js
```

```bash
curl localhost:3000/greatestCommonDivisor/13309/13313
curl localhost:3000/greatestCommonDivisor/3257/3259
```
