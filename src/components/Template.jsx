import {useState} from 'react'
import {
  Container,
  Button,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio
} from "@material-ui/core";
import {  Row, Col } from 'react-bootstrap'

import { makeStyles } from "@material-ui/core/styles";
import Questions from './Question'

// const GreenRadio = makeStyles({
//   root: {
//     color: green[400],
//     "&$checked": {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Radio color="default" {...props} />);


const Template = () => {
    const [answers, setAnswers] = useState([])
    const [sAnswer, setSAnswer] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState([])
    const submitQuiz = ()=>{
        let res = Questions.filter((item,i)=>
                item.ans == answers[i].selectedAnswer
        )
        setCorrectAnswer(res)
    }
    const submitAnswer = (id)=>{
        let res = 
            {
                id:id,
                selectedAnswer:sAnswer
            }

            let ans  = [...answers,res]
        
        setAnswers(ans)
    }
  return (
    <>
      <Container maxWidth="sm">
       
          <Row>
              {Questions.map((item,index)=>{
                  return(
                  
                    <Col key={item.id}>
                    <FormControl component="fieldset">
                    <FormLabel component="legend" >{index+1}. {item.question}</FormLabel>
                        <RadioGroup aria-label="question"  name="question" value={sAnswer} onChange={(ev)=>{
                            setSAnswer(ev.target.value)
                            }}>
                            <FormControlLabel value={item.opt1} control={<Radio />} label={item.opt1} />
                            <FormControlLabel value={item.opt2} control={<Radio />} label={item.opt2} />
                            <FormControlLabel value={item.opt3} control={<Radio />} label={item.opt3} />
                            <FormControlLabel value={item.opt4} control={<Radio />} label={item.opt4} />
                            
                            {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                        </RadioGroup>
                    </FormControl>
                    <Button onClick={()=>{submitAnswer(item.id)}}>Next</Button>

                    </Col>
                            

                  )    
              })}
          </Row>
          <Button onClick={submitQuiz}>Finish</Button>
         {correctAnswer  && correctAnswer.length>0 && <h1 >{correctAnswer.length} Correct Answers</h1>}
      </Container>
    </>
  );
};

export default Template;
