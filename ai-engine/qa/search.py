import sys, json
from vector_store import VectorStore

store = VectorStore()
store.add(["Sample document text one", "Another document text"])

query = sys.argv[1]
results = store.search(query)

print(json.dumps(results))