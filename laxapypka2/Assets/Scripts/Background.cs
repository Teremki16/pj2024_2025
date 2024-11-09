using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Background : MonoBehaviour
{
    float shiftDistansce = 10.5f;
    GameObject camera;

    void Start()
    {
        camera = FindObjectOfType<Camera>().gameObject;
    }

     void Update()
    {
        Vector3 t = transform.position;
        if (t.y - camera.transform.position.y <= shiftDistansce)
        {
            t.y = camera.transform.position.y;
        }
        transform.position = t;
    }
}
