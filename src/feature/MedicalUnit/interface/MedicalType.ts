export interface IMedicalUnit{
    iddonvitiem: number
	tendonvi: string
	city: string
	district: string
	address: string
	idvaccine: number
	id_users: number
    wards: string
}

export interface IMedicalUnitState{
    medicalUnitList: IMedicalUnit[]
	chosenUnit: IMedicalUnit
}