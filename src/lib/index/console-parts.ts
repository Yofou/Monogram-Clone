type Part = {
	src: string[]
	title: string
	price: number | [number, number]
	description?: string
	discount?: number
	inStock?: boolean
}

export const parts: Part[] = [
	{
		src: [
			"https://monogramcc.com/static/da2814a42b25532f27c2138e7db1e23a/10527/Packaging_CoreBracket1_Monogram_May20204545_ccb8b10a-0772-448b-9857-a14fa83bd5b7.jpg", 
			"https://monogramcc.com/static/3a89dcaf837b53337ccaca4ce7da3aec/10527/Consoles_CoreBracket1_Monogram_May2020_4578_6683fd8e-be63-45bb-9fbd-dd82a4838db8.jpg",
		],
		title: "Monogram core",
		price: 149,
		inStock: true,
	},
	{
		src: [
			"https://monogramcc.com/static/538ae39368d4b84742c84ca24b12cfc5/10527/Packaging_OrbiterBracket1_Monogram_May20204542_50105ec2-8b68-4ed5-ac4e-ac261c36459c.jpg",
			"https://monogramcc.com/static/3ae86cee96e3351e6d53f2663252a7a3/10527/Consoles_OrbiterHero_Monogram_May2020_4568_3d64e8b3-71ce-441a-9fcd-2b054c423310.jpg",
		],
		title: "Orbiter module",
		price: 149,
		inStock: true,
	},
	{
		src: [
			"https://monogramcc.com/static/bd515dd23e209eb22bc4c8097253d894/10527/Packaging_DialHeroBracket1_Monogram_May20204539_375e79fb-32f0-447b-b606-3dd0ac8318f6.jpg",
			"https://monogramcc.com/static/d66c887c8b1d50e62956412b954f2326/10527/Consoles_DialBracket1_Monogram_May2020_4575_981a6401-f834-4094-9a6e-6cd7d0b374ca.jpg",
		],
		title: "Dial Module",
		price: 99,
		inStock: true,
	},
	{
		src: [
			"https://monogramcc.com/static/a67703b5d60753a39a6688e25307726a/10527/Packaging_SliderHeroBracket1_Monogram_May20204536_8b0e1987-0315-491e-9951-a9404031b55a.jpg",
			"https://monogramcc.com/static/42de6d977487fe7a4e5f0fcc919d568c/10527/Consoles_SliderBracket1_Monogram_May2020_4565_f941e8d9-d194-47ee-a54a-79132f105e34.jpg",
		],
		title: "Slider Module",
		price: 149,
		inStock: true,
	},
	{
		src: [
			"https://monogramcc.com/static/5e8cb31890de631a316448d574bf8888/10527/Packaging_KeysBracket1_Monogram_May20204548_c26eef0c-c95c-40e6-8fd3-abe1f59abfcd.jpg",
			"https://monogramcc.com/static/775afa620e2c6ef6b941dd1d654a250e/10527/Consoles_KeysBracket1_Monogram_May2020_4571_43b65ca9-4fde-4f55-9f0e-32374554ce76.jpg"
		],
		title: "Essenital Keys Module",
		price: 99,
		inStock: true,
	},
]
