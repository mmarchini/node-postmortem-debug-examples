```bash
ulimit -c unlimited
rm -f core
node --max-old-space-size=32 --abort-on-uncaught-exception index.js
```

```bash
curl localhost:3000/greatestCommonDivisor/10000/50000
```
