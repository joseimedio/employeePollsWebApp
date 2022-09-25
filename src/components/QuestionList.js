import QuestionCard from "./QuestionCard";

const QuestionList = ({name, ids}) => {
    return (
        <div className="question-list">
            <h1>{name}</h1>
            {
                ids.length === 0 
                ? null
                : ids.map((id) => {
                    return (
                        <QuestionCard 
                            key={id}
                            id={id}
                        />
                    )
                })
            }

        </div>
            
                    
    )
}

export default QuestionList;