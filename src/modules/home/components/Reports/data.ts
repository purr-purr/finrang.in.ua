import { importDoc } from '@utils/formatters';
import { type IDocumentsList } from '@utils/types';

export const disclosureInformation: IDocumentsList[] = [
	{
		title: 'Свідоцтво фінансової установи',
		link: importDoc('Svidotstvo.pdf'),
	},
	{
		title: 'Правила надання споживчих кредитів',
		link: importDoc('Pravyla.pdf'),
	},
	{
		title: 'Порядок розгляду звернень споживічів',
		link: importDoc('1. Poriadok rozgliadu.pdf'),
	},
	{
		title: 'Механізми захисту прав споживачів',
		link: importDoc('2.Mehanyzm spozh.pdf'),
	},
	{
		title: 'МРеквізити органів захисту прав споживачів',
		link: importDoc('3.ZPS.pdf'),
	},
	{
		title: 'Порядок взаємодії із споживачами',
		link: importDoc('5_Poriadok_vzaemodii_spozh.pdf'),
	},
	{
		title: 'Договір споживчого кредиту',
		link: importDoc('6_Dogovir spozhivchogo creditu.pdf'),
	},
	{
		title: 'Паспорт споживчого кредиту',
		link: importDoc('7_Pasport kredytu.pdf'),
	},
	{
		title: 'Статут TOB ФК "ФІН-РАНГ"',
		link: importDoc('Statut.pdf'),
	},
];
