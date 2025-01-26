using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraScript : MonoBehaviour
{
    [SerializeField] GameObject target;

    private void Update()
    {
        Vector3 tarPos = target.transform.position;
        tarPos.z = -10;
        Vector3 currPos = transform.position;
        currPos.z = -10;
        Vector3 velocity = (tarPos - transform.position * 1f);
        transform.position = Vector3.SmoothDamp(transform.position,
            tarPos,
            ref velocity,
            1f,
            Time.fixedDeltaTime);
    }
}
