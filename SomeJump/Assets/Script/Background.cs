using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Background : MonoBehaviour
{
    float shiftDistance = 10.5f;
    GameObject mainCamera;
    private void Start()
    {
        mainCamera = FindObjectOfType<Camera>().gameObject;
    }
    void Update()
    {
        Vector3 t = transform.position;
        if(t.y - mainCamera.transform.position.y <= -shiftDistance)
        {
            t.y = mainCamera.transform.position.y;
        }
        transform.position = t;
    }
}
