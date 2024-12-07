using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Circle : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if(collision.gameObject.tag == "Finish");
        {
            GetComponent<Rigidbody2D>().AddTorque(-10000f);
        }
    }
}
