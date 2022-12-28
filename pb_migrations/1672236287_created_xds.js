migrate((db) => {
  const collection = new Collection({
    "id": "ovnyzb608fxq5s9",
    "created": "2022-12-28 14:04:47.441Z",
    "updated": "2022-12-28 14:04:47.441Z",
    "name": "xds",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pdthsfeo",
        "name": "image",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "dxaijdqn",
        "name": "comment",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 70,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xvymxkmw",
        "name": "author",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ovnyzb608fxq5s9");

  return dao.deleteCollection(collection);
})
