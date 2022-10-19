import axios from "axios";



export default function getRoom()
{
        axios.get("https://random-data-api.com/api/v2/users?size=2&is_xml=true")
        .then(res => {
            console.log(res)
            console.log(res.data[0].first_name)
            return res.data[0].first_name
        }).catch(err => {
            console.log(err)
        })


}