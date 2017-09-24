class DeliveryService{

    location: string;  

    GetLocation():this{
        this.location = 'Bangalore';
        return this;
    }

    DropIn():this{
        console.log(`Dropped at location ${this.location}`); 
        return this;
    }
}

export default DeliveryService;