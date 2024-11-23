using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraScript : MonoBehaviour
{
    [SerializeField] Transform target;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        Vector3 targetPos = target.position;
        targetPos.z = transform.position.z;
        transform.position = Vector3.Lerp(transform.position, targetPos, Time.deltaTime);
    }
}
