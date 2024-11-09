using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Background : MonoBehaviour
{
    float shiftDistance = -10.5f;
    GameObject camera;

    private void Start()
    {
        camera = FindObjectOfType<Camera>().gameObject;
    }
    void Update()
    {
        Vector3 t = transform.position;
        if(t.y - camera.transform.position.y <= -shiftDistance)
        {
            t.y = camera.transform.position.y;
        }
        transform.position = t;
    }
}
