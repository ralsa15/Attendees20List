define([], function( ) { return  JSON.stringify(
{
	"localVersion": 1495481467805,
	"serverVersion": 1495481342404,
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
			"Title": "username",
			"Require": {
				"name": "username",
				"proto": false,
				"path": "username"
			},
			"Markup": {
				"tag": "component-username"
			},
			"Connections": {
				"ListItem": [
					"UserMulti",
					"User"
				]
			},
			"Params": {
				"InternalName": "",
				"Title": "",
				"AllowMultipleValues": false,
				"Description": "",
				"DefaultValue": false,
				"LookupField": false,
				"LookupList": false,
				"LookupWebId": false,
				"Presence": false,
				"SelectionGroup": 0,
				"SelectionMode": 1,
				"ReadOnlyField": false,
				"FieldTypeKind": 0,
				"Color": "ms-Persona-initials--green",
				"Required": false
			},
			"Permalink": "https://spaforms365.com/docs/syslib-username/"
		}
	],
	"columns": {
		"Title": "<Field ID=\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\" Type=\"Text\" Name=\"Title\" DisplayName=\"Title\" Required=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Title\" FromBaseType=\"TRUE\" ColName=\"nvarchar1\" />",
		"Username": "<Field Type=\"Text\" DisplayName=\"Username\" Required=\"TRUE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" MaxLength=\"255\" ID=\"{7bcb91c3-a37e-459f-aca0-1a71cac66141}\" SourceID=\"{ae79bd53-8277-4f08-a5bb-232f48bc4ee1}\" StaticName=\"Username\" Name=\"Username\" ColName=\"nvarchar3\" RowOrdinal=\"0\" />",
		"Meeting": "<Field Type=\"Lookup\" DisplayName=\"Meeting\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" List=\"{8d616199-c23e-4a47-bd02-ce7ed4a65ef9}\" ShowField=\"Title\" UnlimitedLengthInDocumentLibrary=\"FALSE\" RelationshipDeleteBehavior=\"None\" ID=\"{d7f084ec-815b-4dc2-8e2a-06b602fa07e6}\" SourceID=\"{ae79bd53-8277-4f08-a5bb-232f48bc4ee1}\" StaticName=\"Meeting\" Name=\"Meeting\" ColName=\"int1\" RowOrdinal=\"0\" />",
		"MeetingID": "<Field Type=\"Text\" DisplayName=\"MeetingID\" Required=\"FALSE\" EnforceUniqueValues=\"FALSE\" Indexed=\"FALSE\" MaxLength=\"255\" ID=\"{78756b9d-2066-436e-a588-c87bfa8ddcfc}\" SourceID=\"{ae79bd53-8277-4f08-a5bb-232f48bc4ee1}\" StaticName=\"MeetingID\" Name=\"MeetingID\" ColName=\"nvarchar4\" RowOrdinal=\"0\" />",
		"Attachments": "<Field ID=\"{67df98f4-9dec-48ff-a553-29bece9c5bf4}\" ColName=\"tp_HasAttachment\" RowOrdinal=\"0\" Type=\"Attachments\" Name=\"Attachments\" DisplayName=\"Attachments\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Attachments\" FromBaseType=\"TRUE\" />"
	}
}
);});