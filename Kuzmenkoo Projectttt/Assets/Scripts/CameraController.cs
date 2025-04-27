using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    void Update()
    {
        if (FindObjectOfType<PlayerLaunch>().canDrag == false)
        {
            Vector3 target;
            if (GameObject.Find("Player"))
            {
                target = GameObject.Find("Player").transform.position;
            }
            else
            {
                target = GameObject.Find("pyramid").transform.position;
            }
            transform.position = new Vector3(target.x, transform.position.y, -10);
        }
    }
}
