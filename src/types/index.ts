export interface Vehicle {
    make: string,
    model:string,
    year:string,
    licensePlate:string,
    photo:string | undefined,

}

export interface Register {
    data: {
        name:string;
        email: string;
      password: string;

    };
  }
