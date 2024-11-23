using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraScript : MonoBehaviour
{
    [SerializeField] Transform target;
    void Start()
    {
        
    }

    void Update()
    {
        Vector3 targetPos = transform.position;
        targetPos.z = transform.position.z;
        transform.position = Vector3.Lerp(transform.position,
            targetPos,
            Time.deltaTime);   
    }
}
