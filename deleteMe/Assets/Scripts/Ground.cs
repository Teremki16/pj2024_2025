using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ground : MonoBehaviour
{
    
    float startX;

    void Start()
    {
        startX = transform.position.x;
    }

    
    void FixedUpdate()
    {
        transform.position = new Vector3(transform.position.x - 0.08f, transform.position.y, transform.position.z);

        if (transform.position.x < startX - 4.85f) {
            transform.position = new Vector3(startX, transform.position.y, transform.position.z);
        }
    }
}
