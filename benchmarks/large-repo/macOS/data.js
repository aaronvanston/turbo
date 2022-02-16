window.BENCHMARK_DATA = {
  "lastUpdate": 1644966291207,
  "repoUrl": "https://github.com/vercel/turborepo",
  "entries": {
    "macOS Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greg.soltis@vercel.com",
            "name": "Greg Soltis",
            "username": "gsoltis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d42fa555ad2a6dc5b1c33fb8ee1bb6c4ae9299d",
          "message": "Large Monorepo Benchmark (#740)\n\nRuns a set of benchmarks against a large monorepo example. \n\nBenchmarks include:\n * A clean, zero-state build* of the monorepo\n * Building the unchanged monorepo with a full cache\n * Building the monorepo with a source code edit on top of a previously-built cache\n * Building the monorepo with a dependency graph edit on top of a previously-build cache\n\n*: Note that we only do this once, and with `concurrency` set to `1`. A full concurrent build currently OOMs",
          "timestamp": "2022-02-15T22:29:29Z",
          "tree_id": "339dab36b2fdf6d11d1e9c4d4681e9ab5d927612",
          "url": "https://github.com/vercel/turborepo/commit/4d42fa555ad2a6dc5b1c33fb8ee1bb6c4ae9299d"
        },
        "date": 1644966290238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Clean Build",
            "value": 252203.4,
            "unit": "ms",
            "range": "0"
          },
          {
            "name": "Cached Build - no changes",
            "value": 12626.2,
            "unit": "ms",
            "range": "1456"
          },
          {
            "name": "Cached Build - source code change",
            "value": 50767.2,
            "unit": "ms",
            "range": "13043"
          },
          {
            "name": "Cached Build - dependency change",
            "value": 51574.8,
            "unit": "ms",
            "range": "13481"
          }
        ]
      }
    ]
  }
}