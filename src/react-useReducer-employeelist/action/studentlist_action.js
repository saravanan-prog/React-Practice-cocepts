export const reducerAction = (state,action) => {

    switch(action.type){
        case "update":
            return state.map((value,index)=>{
                if(action.id == index){
                    value.studentID = 255,
                    value.studentName = "Rithik Roshan"
                }

                return value
            })

        case "delete":
            return state.filter((value,index) => {
                return index !== action.id
            })

        default:
            return state

    }
}