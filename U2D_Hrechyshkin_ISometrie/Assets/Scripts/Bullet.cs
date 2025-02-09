using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bullet : MonoBehaviour
{

    void Start()
    {
        GetComponent<Rigidbody2D>().AddForce(transform.right * 15f, ForceMode2D.Impulse);
    }
}

   
