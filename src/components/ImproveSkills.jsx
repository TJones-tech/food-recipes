import React from 'react'
import { Box, Button } from '@chakra-ui/react'

function ImproveSkills() {
    const list = [
        "Learn new recepies",
        "Try different meals",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Compete in our prize give away"
    ]

    return (
        <div className="section improve-skills">
            <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' mt="8" mb="10">
            <div className="col img">
            </div>
            <div className="col typography">
                <h1 className="title">Try our Taster Challenge!</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                 <Button boxShadow='dark-lg' className="btn">singup now</Button>
            </div>
            </Box>
        </div>
    )
}

export default ImproveSkills;