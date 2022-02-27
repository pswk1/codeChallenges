const test1 = ['code', 'aaagmnrs', 'anagrams', 'doce'];
// aaagmnrs, code
const test2 = ['poke', 'pkoe', 'okpe', 'ekop'];

function funWithAnagrams(text) {
	for (let i = 0; i < text.length; i++) {
		for (let j = text.length; j >= i; j++) {
			let str1 = text[i].split('').sort().join('');
			let str2 = text[j].split('').sort().join('');

			if (str1 === str2) {
				text.splice(j, 1)
			}
		}
	}
	return text.sort();
}

console.log(funWithAnagrams(test1));
console.log(funWithAnagrams(test2));
// console.log(funWithAnagrams(test3));

const test3 = [
	'fqwltvzkqt',
	'volphckcyufdqmlglimklfzktgygdttnhcvpfdfbrp',
	'lkvshwywshtdgmbqbkkxcvgumo',
	'mwvytbytnuqhmfjaqtgngcwkuzyamnerphfmwevh',
	'lezohyeehbrcewjxvceziftiqtntfsrptugtiznorvonzjfea',
	'gamayapwlmbzitzszhzkosvnknber',
	'ltlkggdgpljfisyltmmfvhybljvk',
	'pcflsaqevcijcyrgmqirzniax',
	'kholawoydvchveigttxwpukzjfh',
	'brtspfttotafsngqvoijxuvq',
	'ztvaalsehzxbshnrvbykjqlrzzfm',
	'vyoshiktodnsjjpqplciklzqrxloqxrudygjty',
	'leizmeainxslwhhjwslqendjvx',
	'yghrveuvphknqtsdtwxcktmwwwsdthzmlmbh',
	'kmouhpbqur',
	'fxgqlojmwsomowsjvpvhznbsilhhdkbdxqgrgedpzch',
	'gefeukmcowoeznwhpiiduxdnnlbnmyjyssbsococdzcu',
	'nkrfduvouaghhcyvmlkza',
	'jpfpyljtyjjpyntsefxiswjuten',
	'ycpbcnmhfuqmmidmvknyxmywegmtunodvuzygvguxtrdsdf',
	'fssmeluodjgdgzfmrazvndtaur',
	'kugs',
	'dpawxitivdubbqeonycaegxfjkkl',
	'fkraoheucsvpiteqrs',
	'gkaaaohxxzhqjtkqaqhkwbe',
	'bpmglbjipnujywogwc',
	'lkyrdejaqufowbigrsnjniegvd',
	'otugocedktcbbufnxorixibbdfrzuqsyrfqghoyqevcuanuu',
	'szitaoaowsxyglafbwzddoznrvjqeyqignpi',
	'ruijvyllsibobjltusrypanvybsfrxtlfmpdidtyozoolz',
	'lgdgowijatklvjzscizrkupmsoxftumyxifyunxucubvk',
	'ctkqlr',
	'qgzjvjwzizppvso',
	'flvioemycnphf',
	'tbnwedtubynsbirepgcxfgsfomhvpmymkdoh',
	'ttyyc',
	'ibbeaxniwjkfvabnrll',
	'maglythkgla',
	'zgkeulyrpaeurdvexqlwgakdtbihmfrjijanxkhrqdllecy',
	'pcflsaqevcijcyrgmqixnzira',
	'klqrct',
	'ibbeaxniwjkfvanrbll',
	'vyoshiktodnsjjpqplciklzqrxloqxrudyyjtg',
	'ycpbcnmhfuqmmidmvknyxmywegmtunodvuzygvgxddftsru',
	'yyctt',
	'yghrveuvphknqtsdtwxcktmwwwsdtlhbhmmz',
	'vyoshiktodnsjjpqplciklzqrxloqxrugyytjd',
	'cttyy',
	'brtspfttotafsngqvoiqxuvj',
	'lkyrdejaqufowbigrsnjvedgin',
	'volphckcyufdqmlglimklfzktgygdttnhcvpfdrbpf',
	'qgzjvjwzizpsovp',
];

const test3Expected = [
	'bpmglbjipnujywogwc',
	'brtspfttotafsngqvoijxuvq',
	'ctkqlr',
	'dpawxitivdubbqeonycaegxfjkkl',
	'fkraoheucsvpiteqrs',
	'flvioemycnphf',
	'fqwltvzkqt',
	'fssmeluodjgdgzfmrazvndtaur',
	'fxgqlojmwsomowsjvpvhznbsilhhdkbdxqgrgedpzch',
	'gamayapwlmbzitzszhzkosvnknber',
	'gefeukmcowoeznwhpiiduxdnnlbnmyjyssbsococdzcu',
	'gkaaaohxxzhqjtkqaqhkwbe',
	'ibbeaxniwjkfvabnrll',
	'jpfpyljtyjjpyntsefxiswjuten',
	'kholawoydvchveigttxwpukzjfh',
	'kmouhpbqur',
	'kugs',
	'leizmeainxslwhhjwslqendjvx',
	'lezohyeehbrcewjxvceziftiqtntfsrptugtiznorvonzjfea',
	'lgdgowijatklvjzscizrkupmsoxftumyxifyunxucubvk',
	'lkvshwywshtdgmbqbkkxcvgumo',
	'lkyrdejaqufowbigrsnjniegvd',
	'ltlkggdgpljfisyltmmfvhybljvk',
	'maglythkgla',
	'mwvytbytnuqhmfjaqtgngcwkuzyamnerphfmwevh',
	'nkrfduvouaghhcyvmlkza',
	'otugocedktcbbufnxorixibbdfrzuqsyrfqghoyqevcuanuu',
	'pcflsaqevcijcyrgmqirzniax',
	'qgzjvjwzizppvso',
	'ruijvyllsibobjltusrypanvybsfrxtlfmpdidtyozoolz',
	'szitaoaowsxyglafbwzddoznrvjqeyqignpi',
	'tbnwedtubynsbirepgcxfgsfomhvpmymkdoh',
	'ttyyc',
	'volphckcyufdqmlglimklfzktgygdttnhcvpfdfbrp',
	'vyoshiktodnsjjpqplciklzqrxloqxrudygjty',
	'ycpbcnmhfuqmmidmvknyxmywegmtunodvuzygvguxtrdsdf',
	'yghrveuvphknqtsdtwxcktmwwwsdthzmlmbh',
	'zgkeulyrpaeurdvexqlwgakdtbihmfrjijanxkhrqdllecy',
	'ztvaalsehzxbshnrvbykjqlrzzfm',
];
