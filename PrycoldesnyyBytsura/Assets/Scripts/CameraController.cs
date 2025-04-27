using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    void Update()
    {
        if (FindObjectOfType<PlayerLaunch>().canDrag == false)
        {
            Vector3 target = GameObject.Find("Player").transform.position;
            transform.position = new Vector3(target.x, target.y, -10);
        }
    }
}
