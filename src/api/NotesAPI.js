const API_URL = "http://localhost:3002/notes"

let NotesAPI = {
    getAll(){
        return fetch(API_URL, {
            "Content-Type" :"application/json"
        })
        .then(response=>{
            if(!response.ok){
                throw new Error("Unable to fetch data.")
            }

            return response.json()
        })
        .catch(error=>{
            debugger
            throw new Error("An error occurred while fetching data.")
        })
    },

    create(note){
        return fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type" :"application/json",
            },            
            body:JSON.stringify(note)
        })
        .then(response=>{
            if(!response.ok){
                throw new Error("Unable to post data.")
            }

            return response.json()
        })
        .catch(error=>{
            debugger
            throw new Error("An error occurred while creating note.")
        })
    },
    delete(id){
        return fetch(API_URL + `/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" :"application/json",
            }        
        })
        .then(response=>{
            if(!response.ok){
                throw new Error("Unable to delete item.")
            }

            return response.json()
        })
        .catch(error=>{
            debugger
            throw new Error("An error occurred while deleting item.")
        })
    }
}

export default NotesAPI