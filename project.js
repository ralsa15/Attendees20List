define([], function( ) { return  JSON.stringify(
{
	"localVersion": 1495723352891,
	"serverVersion": 1495723352891,
	"components": [
		{
			"Title": "form",
			"ContentTypeId": null,
			"Require": {
				"name": "viewmodel",
				"proto": false,
				"path": "viewmodel"
			},
			"Markup": {
				"tag": "component-viewmodel"
			},
			"Params": {}
		},
		{
			"Title": "usernamebox",
			"Require": {
				"name": "usernamebox",
				"proto": false,
				"path": "usernamebox"
			},
			"Markup": {
				"tag": "component-usernamebox"
			},
			"Connections": {
				"ListItem": [
					"Text"
				]
			},
			"Params": {
				"InternalName": "",
				"Title": "",
				"Description": "",
				"MaxLength": 100,
				"DefaultValue": "",
				"FieldTypeKind": 0,
				"ReadOnlyField": false,
				"Required": false
			},
			"Permalink": "https://spaforms365.com/docs/syslib-usernamebox/"
		}
	],
	"columns": {
		"Meeting": "<Field Type=\"Lookup\" DisplayName=\"Meeting\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" List=\"{8d616199-c23e-4a47-bd02-ce7ed4a65ef9}\" ShowField=\"Title\" UnlimitedLengthInDocumentLibrary=\"FALSE\" RelationshipDeleteBehavior=\"None\" ID=\"{d7f084ec-815b-4dc2-8e2a-06b602fa07e6}\" SourceID=\"{ae79bd53-8277-4f08-a5bb-232f48bc4ee1}\" StaticName=\"Meeting\" Name=\"Meeting\" ColName=\"int1\" RowOrdinal=\"0\" />",
		"Registrant": "<Field Type=\"User\" DisplayName=\"Registrant\" List=\"UserInfo\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" ShowField=\"ImnName\" UserSelectionMode=\"PeopleOnly\" UserSelectionScope=\"0\" ID=\"{8203c836-d79c-4148-ae16-58d7cfc9c1ca}\" SourceID=\"{ae79bd53-8277-4f08-a5bb-232f48bc4ee1}\" StaticName=\"Registrant\" Name=\"Registrant\" ColName=\"int2\" RowOrdinal=\"0\" />",
		"Title": "<Field ID=\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\" Type=\"Text\" Name=\"Title\" DisplayName=\"Title\" Required=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Title\" FromBaseType=\"TRUE\" ColName=\"nvarchar1\" />",
		"Username": "<Field Type=\"Text\" DisplayName=\"Username\" Required=\"TRUE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" MaxLength=\"255\" ID=\"{7bcb91c3-a37e-459f-aca0-1a71cac66141}\" SourceID=\"{ae79bd53-8277-4f08-a5bb-232f48bc4ee1}\" StaticName=\"Username\" Name=\"Username\" ColName=\"nvarchar3\" RowOrdinal=\"0\" />"
	}
}
);});