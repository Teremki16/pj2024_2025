using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpikeMovement : MonoBehaviour
{
    [SerializeField] Transform upPoint, downPoint;
    [SerializeField] float moveUpSpeed, moveDownSpeed;
    [SerializeField] bool isMoveUp;

    private void Update()
    {
        if (transform.position.y > upPoint.position.x)
        {
            isMoveUp = false;
        }else if(transform.position.y < downPoint.position.x)
        {
            isMoveUp = true ;
        }
    }
}
