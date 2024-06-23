import CCard from "../components/CCard";

function Home(params) {
    var data = [{
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1XYSSNFpQxuc-OYRru-OUegkn6vwWw31_A&s",
        nama:"Buah Buahan",
        desc:"Buah buahan segar di ambil langsung dari petani.",
        harga:15000
    },
    {
        img:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-3164270/indomie_sembako-paket-jumbo-3_full02.jpg",
        nama:"Sembako",
        desc:"Sembako dari suplier langsung harga murah",
        harga:35000
    },
    {
        img:"https://piorder.com/wp-content/uploads/2022/09/712t7y9VZEL.jpg",
        nama:"Snak",
        desc:"Snak enak dengan citarasa unik",
        harga:5000
    }]
    // function ritem(){
    //     var ritems=[];
    //     for(let item of data){
    //         ritems.push(<CCard dtitem={item}></CCard>)
    //     }
    //     return ritems;
    // }
    return(
        <div  className="citems d-flex justify-content-center align-items-center">
            {/* {ritem()} */}
          {data.map((itm,i)=>{
              return <CCard key={i} dtitem={itm}></CCard>
          })}
        </div>
    );
}

export default Home;