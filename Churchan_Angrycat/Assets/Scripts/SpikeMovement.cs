using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpikeMovement : MonoBehaviour
{

    [SerializeField] Transform upPoint, downPoint;
    [SerializeField] float moveUpSpeed, moveDownSpeed;
    [SerializeField] bool isMoveup;
    [SerializeField] bool isHorizontal = false;

    private void Update()
    {
        if (!isHorizontal)
        {

            if (transform.position.y > upPoint.position.y)
            {
                isMoveup = false;
            }
            else if (transform.position.y < downPoint.position.y)
            {
                isMoveup = true;
            }
        }
        else
        {
            if (transform.position.x < upPoint.position.x)
            {
                isMoveup = false;
            }
            else if (transform.position.x > downPoint.position.x)
            {
                isMoveup = true;
            }
        }
        
    }

    private void FixedUpdate()
    {
        if (!isHorizontal)
        {

            if (isMoveup)
            {
                transform.Translate(Vector3.up * moveUpSpeed * Time.fixedDeltaTime);
            }
            else
            {
                transform.Translate(Vector3.down * moveDownSpeed * Time.fixedDeltaTime);
            }
        }
        else
        {
            if (isMoveup)
            {
                transform.Translate(Vector3.left * moveUpSpeed * Time.fixedDeltaTime);
            }
            else
            {
                transform.Translate(Vector3.right * moveDownSpeed * Time.fixedDeltaTime);
            }
        }
    }


}
