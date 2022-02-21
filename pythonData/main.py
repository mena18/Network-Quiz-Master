import json
import os

dir = "1"
question_file = os.path.join(dir,"questions.txt")
answers_file = os.path.join(dir,"answers.txt")
json_file = os.path.join(dir,"final.json")

s = {}
with open(question_file) as f:
    sections =  f.read().split("="*20)
    for sec_num,section in enumerate(sections):
        lines = section.split("\n")
        key = f"{dir}.{sec_num+1}"
        s[key] = []
        last_question = []
        for line in lines:
            if line=="":
                if(len(last_question) > 0):
                    s[key].append( "\n".join(last_question))
                    last_question = []
            else:
                
                last_question.append(line)
        if last_question:
            s[key].append( "\n".join(last_question))



def generate_json(s):
    output = []
    for key in s:
        for element in s[key]:
            output.append({"question":element,"answer":"","section":key})
    return output


questions = generate_json(s);


answers = []
with open(answers_file) as f:
    r = f.read()
    lines = r.split("\n")
    last_answer = []
    for line in lines:
        if line=="":
            if(len(last_answer) > 0):
                answers.append( "\n".join(last_answer))
                last_answer = []
        else:    
            last_answer.append(line)
    if last_answer:
        answers.append( "\n".join(last_answer))



i=0
for obj in questions:
    obj['answer'] = answers[i]
    i+=1

with open(json_file, 'w') as write:
    json.dump(questions,write)
    
