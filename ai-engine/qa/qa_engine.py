from transformers import pipeline

qa = pipeline("question-answering",
              model="distilbert-base-cased-distilled-squad")

def answer(context, question):
    return qa(question=question, context=context)