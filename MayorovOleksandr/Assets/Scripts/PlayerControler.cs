using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControler : MonoBehaviour
{
   private Vector2 direction;
   private float speed = 5f;
   private Vector2 scaleObject = new Vector2(2f, 2f);
    private Rigidbody2D rg2d;  

    void Start()
    {
        rg2d = gameObject.GetComponent<Rigidbody2D>();

    }
    void Update()
    {
		if (Input.GetKeyDown(KeyCode.Space))
            {
                rg2d.AddForce(Vector2.up * speed, ForceMode2D.Impulse);
            }

	
    }
}
