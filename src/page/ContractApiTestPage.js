
import * as Api from "/src/apis/ApiInterface";
const ContractApiTestPage = () => {


    Api.greeting().then((result) => {
        console.log("greeting")
        console.log(result);
    });

    Api.greeting()
    return (
        <div>
            ContractApiTest
        </div>
    )
}
