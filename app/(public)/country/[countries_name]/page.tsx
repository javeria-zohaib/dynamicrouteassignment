import { countryData } from "@/app/data/countries";
import { CountryData } from "@/app/data/type";
export default function Countrypage({params}:{params:{countries_name:string}}){
    let countryDetail:CountryData|null=null;
    switch (params.countries_name){
        case "Pakistan":countryDetail=countryData[0]
        break;
        case "Qatar":countryDetail=countryData[1]
        break;
        case "India":countryDetail=countryData[2]
        break;
        case "Bangladesh":countryDetail=countryData[3]
        break;
        case "Afghanistan":countryDetail=countryData[4]
        break;
        

    }
    if(!countryDetail){
        return(
            <div>country not found</div>
        )
    }
    return(
        <div>
            <ul className="font-semibold text-center mt-20 space-x-3 bg-fuchsia-700">
            <li>NAME:{countryDetail.name}</li>
            <li>POPULATION:{countryDetail.population}</li>
            <li>CAPITAL:{countryDetail.capital}</li></ul>
            
        </div>
    )
}


  

       
        

    
   

