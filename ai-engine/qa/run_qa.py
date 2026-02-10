import sys, json
from qa_engine import answer

context = sys.argv[1]
question = sys.argv[2]

print(json.dumps(answer(context, question)))