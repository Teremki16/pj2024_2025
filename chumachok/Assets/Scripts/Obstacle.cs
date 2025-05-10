using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Obstacle : MonoBehaviour
{
    void Start()
    {
        
    }

    void FixedUpdate()
    {
        transform.position = new Vector3(transform.position.x - 0.08f, transform.position.y, transform.position.z);


        if (transform.position.x < -10f) {
            Destroy(gameObject);
        }
    }
}
