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
            var record =  state.filter((value,index) => {
                return index != action.id
            })
            return record

        default:
            return state

    }
}