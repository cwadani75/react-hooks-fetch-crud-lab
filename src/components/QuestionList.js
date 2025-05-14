// src/components/QuestionList.js
import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  return (
    <section>
      <h2>Questions</h2>
      <ul>
        {questions.map((q) => (
          <QuestionItem
            key={q.id}
            question={q}
            onDelete={onDeleteQuestion}
            onUpdate={onUpdateQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
