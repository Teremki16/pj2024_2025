using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraScript : MonoBehaviour
{
    [SerializeField] public GameObject Target;
    void Update()
    {
        Vector3 targetPos = Target.transform.position;
        Vector3 currpos = transform.position;
        targetPos.z = -10;
        currpos.z = -10;
        Vector3 vel = (targetPos - currpos) * 1f;
        
        transform.position = Vector3.SmoothDamp(currpos, targetPos, ref vel, 1f, Time.fixedDeltaTime); ;
    }
}
