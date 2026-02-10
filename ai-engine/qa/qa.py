from langchain.chains import RetrievalQA
from langchain.vectorstores import FAISS

def question_answer(docs, question):
    db = FAISS.from_documents(docs)
    qa = RetrievalQA.from_chain_type(llm="gpt-4o-mini", retriever=db.as_retriever())
    return qa.run(question)