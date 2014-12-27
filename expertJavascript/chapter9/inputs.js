// var x = 5 + 4;

// sintax tree of: var x = 5 + 4;
{
	"type": "Program",
	"body": [
		{
			"type": "VariableDeclaration",
			"declarations": [
				{
					"type": "VariableDeclarator",
					"id": {
						"type": "Identifier",
						"name":
					},
					"init": {
						"type": "BinaryExpression",
						"operator": "+",
						"left": {
							"type": "Literal",
							"value": 5,
							"raw": "5"
						},
						"right": {
							"type": "Literal",
							"value": 4,
							"raw": "4"
						}
					}
				}
			],
			"kind": "var"
		}
	]
}