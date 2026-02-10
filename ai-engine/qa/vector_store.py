from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

model = SentenceTransformer("all-MiniLM-L6-v2")

class VectorStore:
    def __init__(self):
        self.index = faiss.IndexFlatL2(384)
        self.texts = []

    def add(self, docs):
        embeddings = model.encode(docs)
        self.index.add(np.array(embeddings).astype("float32"))
        self.texts.extend(docs)

    def search(self, query, k=5):
        q_emb = model.encode([query]).astype("float32")
        _, idx = self.index.search(q_emb, k)
        return [self.texts[i] for i in idx[0]]